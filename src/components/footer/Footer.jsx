import { config } from "../../../public/config"

const Footer = () => {
  return (
    <>
        <ul>
            {
                config[0].footer.map((item, index) => (
                    <li key={index}><a href={item.url}>{item.title}</a></li>
                ))
            }
        </ul>
    </>
  )
}

export default Footer