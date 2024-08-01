import { model, Schema } from "mongoose";
import { Reproduction } from "./reproduction.model";

export interface Animal{
    id: string;
    species: string;
    breed: string;
    birthDate: Date;
    medicalHistory: MedicalHestoryRecord[];
    reproduction: Reproduction;
    feeding:Feeding;
}

export interface MedicalHestoryRecord{
    date: Date;
    treatment: string;
    diagnosis?: string;
}

export interface Feeding{
    dailyRations: {
        date: Date;
        foodType: string;
        quantity: number;
    }[]

}


export const animalSchema = new Schema<Animal>({
    id: { type: String, required: true, unique: true },
    species: { type: String, required: true },
    breed: { type: String, required: true },
    birthDate: { type: Date, required: true },
    medicalHistory: [
      {
        date: { type: Date, required: true },
        treatment: { type: String, required: true },
        diagnosis: { type: String }
      }
    ],
    reproduction: {
      inseminationDates: [Date],
      gestationPeriods: [
        {
          startDate: { type: Date, required: true },
          endDate: { type: Date, required: true }
        }
      ],
      birthDates: [Date]
    },
    feeding: {
      dailyRations: [
        {
          date: { type: Date, required: true },
          foodType: { type: String, required: true },
          quantity: { type: Number, required: true }
        }
      ]
    }
  },{
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    },
    timestamps: true
  });

  export const AnimalModel = model<Animal>('Animal', animalSchema)