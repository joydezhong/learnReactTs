import * as React from "react";

import { IUser } from './HomeComponent'

export interface IListProps<T> {
  items: T[],
  itemRender: (item: T) => React.ReactElement;
}

// class List<T> extends React.Component<IListProps<T>, {}>{
//   render() {
//     const { items, itemRender } = this.props;
//     return <div>
//       { items.map(itemRender) }
//     </div>
//   }
// }

const List: React.FC<IListProps<IUser>> = props => {
  const { items, itemRender } = props;

  return <div>
      { items.map(itemRender) }
    </div>
}

export default List