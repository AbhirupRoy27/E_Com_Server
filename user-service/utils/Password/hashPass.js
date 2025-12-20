import bcrypt from 'bcrypt'
const SALT_ROUNDS = 10

export default async function hashPass(pass) {
  const hash = await bcrypt.hash(pass, SALT_ROUNDS)
  return hash
}
