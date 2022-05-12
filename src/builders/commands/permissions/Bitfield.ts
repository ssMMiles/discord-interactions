/**
 * Data structure that makes it easy to interact with a bitfield.
 */
export class Bitfield {
  public bitfield?: bigint;

  constructor(...bits: bigint[]) {
    if (bits.length > 0) this.add(...bits);
  }

  /**
   * Checks whether the bitfield has a bit
   * @param {bigint} bit Bit to check for
   */
  has(bit: bigint): boolean {
    if (!this.bitfield) return false;

    return (this.bitfield & bit) === bit;
  }

  /**
   * Adds bits to these ones.
   * @param {...bigint} [bits] Bits to add
   */
  add(...bits: bigint[]) {
    if (!this.bitfield) this.bitfield = 0n;

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
    if (!this.bitfield) this.bitfield = 0n;

    for (const bit of bits) {
      this.bitfield &= bit;
    }

    return this;
  }

  disallowAll() {
    this.bitfield = 0n;
  }

  allowAll() {
    delete this.bitfield;
  }

  toJSON(): string | null {
    return this.bitfield !== undefined ? this.bitfield.toString() : null;
  }
}
