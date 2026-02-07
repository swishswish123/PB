import { imgPath } from "../utils/imagePath";


export default function Title() {
return (
<section className="title">
<img src={imgPath("title.png")} alt="Profile" />
<h1>AI & Robotics Engineer</h1>
<p>Building intelligent machines and autonomous systems</p>
</section>
)
}

