import bcrypt from 'bcrypt'

export default async function checkPass(pass, hash) {
  const result = await bcrypt.compare(pass, hash)
  return result
}
