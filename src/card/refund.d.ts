export function createRefund(data: {
  chargeID: string;
  amount: number;
  externalID: string;
}): Promise<object>;
