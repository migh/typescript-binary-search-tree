/// <reference path="../node_modules/@types/jasmine/index.d.ts" />
import { BinarySearchTree } from '../src/BinarySearchTree';
import { StringNode } from '../src/StringNode';

describe('BinarySearchTree', () => {
  it('must be defined.', () => {
    expect(BinarySearchTree).toBeDefined();
  });

  it('can create an empty tree.', () => {
    let bst = new BinarySearchTree();
    expect( bst.getRoot() ).toBeNull();
    expect( bst.length ).toBe(0);
  });

  it('can create a tree with the root defined.', () => {
    let bst = new BinarySearchTree( new StringNode('This is a string') );
    expect( bst.getRoot().show() ).toBe('This is a string');
    expect( bst.length ).toBe(1);
  });

  describe('insert', () => {
    let bst = new BinarySearchTree<StringNode>();
    bst.insert('A');
  });

  describe('traversals', () => {
    let bst = new BinarySearchTree<StringNode>();
    let inputArray = ['M','Z','A','X','D','E','I','S','U','P'];

    beforeEach(() => {
      for(let i = 0, len = inputArray.length; i < len; i++) {
        bst.insert( new StringNode(inputArray[i]) );
      }
    });

    it('perform inorderTraversal', () => {
      // [ "A", "D", "E", "I", "M", "P", "S", "U", "X", "Z" ]
      let outputArray = inputArray.sort();
      expect( bst.inorderTraversal().map( x => x.show() ) ).toEqual( outputArray );
    });

    it('perform preorderTraversal', () => {
      let outputArray = [ "M", "A", "D", "E", "I", "Z", "X", "S", "P", "U" ];
      expect( bst.preorderTraversal().map( x => x.show() ) ).toEqual( outputArray );
    });

    it('perform postorderTraversal', () => {
      let outputArray = [ "I", "E", "D", "A", "P", "U", "S", "X", "Z", "M" ];
      expect( bst.postorderTraversal().map( x => x.show() ) ).toEqual( outputArray );
    });
  });

  describe('find', () => {
    let bst = new BinarySearchTree<StringNode>();
    let inputArray = ['M','Z','A','X','D','E','I','S','U','P'];

    beforeEach(() => {
      for(let i = 0, len = inputArray.length; i < len; i++) {
        bst.insert( new StringNode(inputArray[i]) );
      }
    });

    it('finds the node', () => {
      expect( bst.find('A').data ).toEqual( new StringNode('A').data );
    });

    it('does not find the node', () => {
      expect( bst.find('R') ).toBeNull();
    });
  });

  describe('remove', () => {
    pending('Needs to be implemented.');
  });

  describe('balance', () => {
    pending('Needs to be implemented.');
  });
});
