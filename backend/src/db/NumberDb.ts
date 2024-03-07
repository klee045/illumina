class NumberDb {
  private numbers: Set<number>;

  public constructor() {
    this.numbers = new Set([]);
  }

  public add({ num }: { num: number }): void {
    this.numbers.add(num);
    console.log(this.numbers);
  }

  public verify({ num }: { num: number }): boolean {
    return this.numbers.has(num);
  }
}

export default NumberDb;
