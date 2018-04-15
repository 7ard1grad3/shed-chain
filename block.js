const SHA256 = require('crypto-js/sha256');
class Block {
    constructor(timestamp,lasthash,hash,data) {
        /* Init properties */
        this.timestamp = timestamp;
        this.lasthash = lasthash;
        this.hash = hash;
        this.data = data;
    }
    toString() {
        return `Block -
        Timestamp: ${this.timestamp}
        Last Hash: ${this.lasthash.substring(0,10)}
        Hash: ${this.hash.substring(0,10)}
        Data: ${this.data}
        `;
    }

    static genesis() {
        return new this('Genesis time', '------', 'f1r57-h445h', []);
    }

    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lasthash = lastBlock.hash;
        const hash = Block.hash_block(timestamp, lasthash, data);
        return new this(timestamp, lasthash, hash, data);
    }
    static hash_block(timestamp, lastHash, data) {
        return SHA256(`${timestamp},${lastHash},${data}`).toString();
    }
}
module.exports = Block;