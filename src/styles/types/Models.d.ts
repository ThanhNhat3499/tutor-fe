export type User = {
  _id: string,
  username: string,
  password: string,
  email: string,
  fullname: string,
  birthday: string,
  phone: string,
  address: string,
  gender: boolean,
  picture: string,
  role: string,
  active?: boolean
  CV?: string
}

export type CV = {
  tutorId: string,
  CV: string
}

export type Account = {
  username: string,
  password: string
}

export type Schedule = {
  tutorId: string,
  tutorName: string,
  subject: string[],
  grade: string[],
  time: string[],
  price: string[],
  image: string[],
  address: string[]
}