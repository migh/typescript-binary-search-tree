import { Node } from './Node.interface';

// todo: present the BST as an iterator
// todo: make the tree functional

export class BinarySearchTree<NodeClass extends Node<T>, T> {
  constructor(root?: NodeClass){
    this.root = root || null;
    this.length = root ? 1 : 0;
  }
  root: NodeClass;
  length: number;

  insert(node: NodeClass){
    if( !this.root ){
      this.root = node;
    } else {
      let pointer: NodeClass = this.root;
      let success: boolean = false;

      while( !success ){
        switch( node.compare( pointer ) ) {
          case 0:
            // Update node or throw error
            success = true;
            break;
          case -1:
            if ( pointer.left ) {
              pointer = pointer.left as NodeClass;
            } else {
              pointer.left = node;
            }
            break;
          case 1:
            if ( pointer.right ) {
              pointer = pointer.right as NodeClass;
            } else {
              pointer.right = node;
            }
            break;
        }
      }
    }
  }

  remove(node: NodeClass):NodeClass{
    return null;
  }

  balance(){
  }

  find(data:T):NodeClass{
    let traversal = ( start: NodeClass ) => {
      let res: NodeClass;
      if( start ) {
        switch( start.compareByData(data) ) {
          case 0:
            res = start;
            break;
          case -1:
            if ( start.right ) {
              res = traversal( start.right  as NodeClass );
            } else {
              res = null;
            }
            break;
          case 1:
            if ( start.left ) {
              res = traversal( start.left as NodeClass );
            } else {
              res = null;
            }
            break;
        }
      }
      return res;
    };

    return traversal( this.root );
  }

  // includes()

  getRoot():NodeClass{
    return this.root;
  }

  print():string{
    return '';
  }

  toArray():NodeClass[]{
    return this.preorderTraversal();
  }

  preorderTraversal():NodeClass[]{
    let res: NodeClass[] = [];
    let traversal = ( start: NodeClass ) => {
      if( start ) {
        res.push( start );
        traversal( start.left as NodeClass );
        traversal( start.right as NodeClass );
      }
    };

    traversal( this.root );

    return res;
  }

  inorderTraversal():NodeClass[]{
    let res: NodeClass[] = [];
    let traversal = ( start: NodeClass ) => {
      if( start ) {
        traversal( start.left as NodeClass );
        res.push( start );
        traversal( start.right as NodeClass );
      }
    };

    traversal( this.root );

    return res;
  }

  postorderTraversal(): NodeClass[]{
    let res: NodeClass[] = [];
    let traversal = ( start: NodeClass ) => {
      if( start ) {
        traversal( start.left as NodeClass );
        traversal( start.right as NodeClass );
        res.push( start );
      }
    };

    traversal( this.root );

    return res;
  }
}
