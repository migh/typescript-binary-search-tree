export interface Node<T> {
  data: T;
  left: Node<T>;
  right: Node<T>;
  show():T;
  // Returns:
  // -1 => node less than secondNode
  // 0 => node equals to secondNode
  // 1 => node greater than secondNode
  compare(secondNode: Node<T>):number;
  compareByData(secondNodeData: T):number;
}
