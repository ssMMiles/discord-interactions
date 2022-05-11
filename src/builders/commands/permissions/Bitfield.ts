/**
 * Data structure that makes it easy to interact with a bitfield.
 */
export class Bitfield {
  public bitfield = 0n;

  constructor(...bits: bigint[]) {
    this.add(...bits);
  }

  /**
   * Checks whether the bitfield has a bit, or multiple bits.
   * @param {BitFieldResolvable} bit Bit(s) to check for
   * @returns {boolean}
   */
  has(bit: bigint) {
    return (this.bitfield & bit) === bit;
  }

  /**
   * Adds bits to these ones.
   * @param {...BitFieldResolvable} [bits] Bits to add
   * @returns {BitField} These bits or new BitField if the instance is frozen.
   */
  add(...bits: bigint[]) {
    for (const bit of bits) {
      this.bitfield |= bit;
    }

    return this;
  }

  /**
   * Removes bits from these.
   * @param {...BitFieldResolvable} [bits] Bits to remove
   * @returns {BitField} These bits or new BitField if the instance is frozen.
   */
  remove(...bits: bigint[]) {
    for (const bit of bits) {
      this.bitfield &= bit;
    }

    return this;
  }

  toJSON() {
    return typeof this.bitfield === "number" ? this.bitfield : this.bitfield.toString();
  }
}
