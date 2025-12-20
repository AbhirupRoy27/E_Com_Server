import bcrypt from 'bcrypt'

export default async function checkPass(pass) {
  const result = await bcrypt.compare(pass, hash)
  return console.log(result)
}
