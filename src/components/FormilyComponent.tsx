import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  FormEffectHooks,
  Submit,
  Reset
} from '@formily/antd' // 或者 @formily/next
import { merge } from 'rxjs'
import { Input, Select } from '@formily/antd-components' // 或者@formily/next-components
import 'antd/dist/antd.css'

const components = {
  Input,
  Select
}

const layout = {
  labelCol: 5,
  wrapperCol: 14
}

const schmeas = {
  "type": "object",
  "properties": {
    "aa": {
      "key": "aa",
      "type": "string",
      "title": "AA",
      "enum": [
        {
          "label": "是是是",
          "value": "是是是"
        },
        {
          "label": "否否否",
          "value": "否否否"
        }
      ],
      "name": "aa",
      "x-component": "select"
    },
    "bb": {
      "key": "bb",
      "type": "string",
      "title": "BB",
      "name": "bb",
      "x-component": "input"
    }
  }
}

const { onFieldValueChange$, onFieldInit$ } = FormEffectHooks

const effects = ({ setFieldState }:any) => {
  merge(onFieldValueChange$('aa'), onFieldInit$('aa')).subscribe(
    fieldState => {
      setFieldState('bb', (state:any) => {
        state.visible = fieldState.value === "是是是"
      })
    }
  )
}

const Index = () => {
  return (
    <SchemaForm
      {...layout}
      components={components}
      effects={effects}
      schema={schmeas}
    >
      {/* <Field
        type="string"
        title="AA"
        enum={[
          { label: '123', value: 123 },
          { label: '321', value: 321 }
        ]}
        name="aa"
        x-component="Select"
      />
      <Field type="string" title="BB" name="bb" x-component="Input" /> */}
      <FormButtonGroup offset={5}>
        <Submit>查询</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup>
    </SchemaForm>
  )
}


export default Index
