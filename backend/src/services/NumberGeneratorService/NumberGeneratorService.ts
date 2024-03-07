import NumberDb from "../../db/NumberDb";

class NumberGeneratorService {
  private numberDb: NumberDb;

  public constructor() {
    this.numberDb = new NumberDb();
  }

  public generateNumber(): number {
    let generatedNum: number = Math.floor(Math.random() * 12);
    let hasNumAppeared: boolean = this.numberDb.verify({ num: generatedNum });

    while (hasNumAppeared) {
      generatedNum = Math.floor(Math.random() * 12);
      hasNumAppeared = this.numberDb.verify({
        num: generatedNum,
      });
    }

    this.numberDb.add({ num: generatedNum });
    return generatedNum;
  }
}

export default NumberGeneratorService;
