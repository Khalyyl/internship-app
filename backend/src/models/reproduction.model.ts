import { Schema, model } from 'mongoose';

export interface Reproduction {
  inseminationDates: Date[];
  gestationPeriods: GestationPeriod[];
  birthDates: Date[];
}

export interface GestationPeriod {
  startDate: Date;
  endDate: Date;
}

const gestationPeriodSchema = new Schema<GestationPeriod>({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true }
});

const reproductionSchema = new Schema<Reproduction>({
  inseminationDates: [Date],
  gestationPeriods: [gestationPeriodSchema],
  birthDates: [Date]
});

export const ReproductionModel = model<Reproduction>('Reproduction', reproductionSchema);
