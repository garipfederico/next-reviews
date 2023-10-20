import { orbitron } from '@/app/fonts'

export default function Heading({children}) {
  // return <h1 className={`font-bold pb-3 text-2xl" ${orbitron.className} `}>{children}</h1>; // Esta linea usa fonts con next VIDEO 27
  return <h1 className="font-bold font-orbitron pb-3 text-2xl">{children}</h1>; // Esta linea usa fonts con tailwind VIDEO 28
}
 