

export const sample_animals: any[] = [
  {
    id: 'A001',
    species: 'Cow',
    breed: 'Holstein',
    birthDate: new Date('2020-01-01'),
    medicalHistory: [
      {
        date: new Date('2021-01-10'),
        treatment: 'Vaccination',
        diagnosis: 'Healthy'
      },
      {
        date: new Date('2022-03-15'),
        treatment: 'Antibiotics',
        diagnosis: 'Infection'
      }
    ],
    reproduction: {
      inseminationDates: [new Date('2021-06-01'), new Date('2022-06-01')],
      gestationPeriods: [
        {
          startDate: new Date('2021-06-01'),
          endDate: new Date('2022-03-01')
        }
      ],
      birthDates: [new Date('2022-03-01')]
    },
    feeding: {
      dailyRations: [
        {
          date: new Date('2023-07-01'),
          foodType: 'Hay',
          quantity: 15
        },
        {
          date: new Date('2023-07-02'),
          foodType: 'Grain',
          quantity: 10
        }
      ]
    }
  },
  
  {
    id: 'A002',
    species: 'Sheep',
    breed: 'Merino',
    birthDate: new Date('2021-02-10'),
    medicalHistory: [
      {
        date: new Date('2022-02-10'),
        treatment: 'Deworming',
        diagnosis: 'Healthy'
      }
    ],
    reproduction: {
      inseminationDates: [new Date('2022-08-01')],
      gestationPeriods: [
        {
          startDate: new Date('2022-08-01'),
          endDate: new Date('2023-01-01')
        }
      ],
      birthDates: [new Date('2023-01-01')]
    },
    feeding: {
      dailyRations: [
        {
          date: new Date('2023-07-01'),
          foodType: 'Grass',
          quantity: 8
        }
      ]
    }
  },
  {
    id: 'A003',
    species: 'Chicken',
    breed: 'Leghorn',
    birthDate: new Date('2022-04-20'),
    medicalHistory: [
      {
        date: new Date('2022-05-15'),
        treatment: 'Vaccination',
        diagnosis: 'Healthy'
      }
    ],
    reproduction: {
      inseminationDates: [],
      gestationPeriods: [],
      birthDates: []
    },
    feeding: {
      dailyRations: [
        {
          date: new Date('2023-07-01'),
          foodType: 'Corn',
          quantity: 1
        }
      ]
    }
  },
  {
    id: 'A004',
    species: 'Pig',
    breed: 'Berkshire',
    birthDate: new Date('2019-09-15'),
    medicalHistory: [
      {
        date: new Date('2020-11-20'),
        treatment: 'Antibiotics',
        diagnosis: 'Pneumonia'
      },
      {
        date: new Date('2021-05-10'),
        treatment: 'Vaccination',
        diagnosis: 'Healthy'
      }
    ],
    reproduction: {
      inseminationDates: [new Date('2021-07-01')],
      gestationPeriods: [
        {
          startDate: new Date('2021-07-01'),
          endDate: new Date('2022-02-01')
        }
      ],
      birthDates: [new Date('2022-02-01')]
    },
    feeding: {
      dailyRations: [
        {
          date: new Date('2023-07-01'),
          foodType: 'Feed',
          quantity: 25
        }
      ]
    }
  },
  {
    id: 'A005',
    species: 'Goat',
    breed: 'Nubian',
    birthDate: new Date('2020-06-12'),
    medicalHistory: [
      {
        date: new Date('2021-06-12'),
        treatment: 'Deworming',
        diagnosis: 'Healthy'
      }
    ],
    reproduction: {
      inseminationDates: [new Date('2022-04-01')],
      gestationPeriods: [
        {
          startDate: new Date('2022-04-01'),
          endDate: new Date('2022-09-01')
        }
      ],
      birthDates: [new Date('2022-09-01')]
    },
    feeding: {
      dailyRations: [
        {
          date: new Date('2023-07-01'),
          foodType: 'Hay',
          quantity: 5
        }
      ]
    }
  },
  {
    id: 'A006',
    species: 'Duck',
    breed: 'Pekin',
    birthDate: new Date('2021-12-30'),
    medicalHistory: [
      {
        date: new Date('2022-01-15'),
        treatment: 'Vaccination',
        diagnosis: 'Healthy'
      }
    ],
    reproduction: {
      inseminationDates: [],
      gestationPeriods: [],
      birthDates: []
    },
    feeding: {
      dailyRations: [
        {
          date: new Date('2023-07-01'),
          foodType: 'Pellets',
          quantity: 0.5
        }
      ]
    }
  }
];


export const sample_users:any[] = [
  {
   id: 'U001',
   username: 'admin',
   email: 'admin@gmail.com',
   password: 'admin',
   phoneNumber: '1234567890',
   address: 'Tunis,Tunisia',
   role: 'farmer',
  },
  {
    id: 'U002',
    username: 'Khalyl',
    email: 'khalyl@gmail.com',
    password: 'user',
    phoneNumber: '52070380',
    address: '123 Main St',
    role: 'farmer'
  },
  {
    id: 'U003',
    username: 'user2',
    email: 'user2@gmail.com',
    password: 'user2',
    phoneNumber: '1234567890',
    address: '123 Main St',
    role: 'employer'
  }
];

