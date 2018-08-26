const Block = require('./block');

const fooBlock = Block.mineBlock(Block.genesis(),'fool');
console.log(fooBlock.toStringChain());