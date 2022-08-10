import React from "react"
import { AiFillHtml5 } from "react-icons/ai"
import { IoLogoCss3 } from "react-icons/io"
import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoCodeSlashOutline,
  IoLogoFirebase,
} from "react-icons/io5"
import { FaPython, FaReact } from "react-icons/fa"
import { SiMysql, SiMongodb, SiDart, SiPrisma } from "react-icons/si"
import { FiDatabase } from "react-icons/fi"
import { SiDjango, SiPostgresql } from "react-icons/si"
import { RiFlutterFill } from "react-icons/ri"

// MdComputer
import { MdComputer } from "react-icons/md"

// =====end of icon======
import * as style from "../../style/skill.module.scss"
const Skill = () => {
  return (
    // id = skill (for smooth scrolling)

    <main id="skill" className={style.skill_parent_grid}>
      <div className="center_title">
        <div className="title_text">
          <h1>skill</h1>
          <div className="uderline"></div>
        </div>
      </div>

      <article className={style.skill_container_wrapper}>
        <div className={style.skill_info_container}>
          <div className={style.languages}>
            {/* ======== LANGUAGES SECTION ================  */}

            <h3>
              {" "}
              <i>
                <IoCodeSlashOutline />
              </i>{" "}
              languages
            </h3>

            <div>
              <ul>
                {/* ========HTML & CSS========= */}
                <li>
                  {" "}
                  <i>
                    <AiFillHtml5 />
                  </i>{" "}
                  html5 /
                  <i>
                    <IoLogoCss3 />
                  </i>{" "}
                  css3
                </li>
                {/* ========JAVASCRIPT & REACT========= */}
                <li>
                  {" "}
                  <i>
                    <IoLogoJavascript />
                  </i>{" "}
                  javascript /{" "}
                  <i>
                    <FaReact />
                  </i>{" "}
                  React
                </li>

                {/* ========PYTHON & DJANGO========= */}
                <li>
                  {" "}
                  <i>
                    <FaPython />
                  </i>{" "}
                  python /{" "}
                  <i>
                    <SiDjango />
                  </i>{" "}
                  django
                </li>
                {/* ========DART & FLUTTER========= */}
                <li>
                  {" "}
                  <i>
                    <SiDart />
                  </i>{" "}
                  dart /{" "}
                  <i>
                    <RiFlutterFill />
                  </i>{" "}
                  flutter
                </li>
              </ul>
            </div>
          </div>

          {/* ======== DATABASES SECTION ================  */}
          <div className={style.database}>
            <h3>
              {" "}
              <i>
                <FiDatabase />
              </i>{" "}
              database
            </h3>
            <ul>
              {/* =====MONGODB & NODE JS===== */}
              <li>
                {" "}
                <i>
                  <SiMongodb />
                </i>{" "}
                mongodb /{" "}
                <i>
                  <IoLogoNodejs />
                </i>{" "}
                NodeJS
              </li>
              {/* =====MYSQL & SQL===== */}
              <li>
                {" "}
                <i>
                  <SiMysql />
                </i>{" "}
                mysql / sql
              </li>
              {/* =====POSTGRES & FIREBASE===== */}
              <li>
                <i>
                  <SiPostgresql />
                </i>{" "}
                postgres /{" "}
                <i>
                  <IoLogoFirebase />
                </i>{" "}
                firebase
              </li>
              {/* =====PRISMA===== */}
              <li>
                <i>
                  <SiPrisma />
                </i>{" "}
                prisma{" "}
              </li>
            </ul>
          </div>
        </div>

        {/* ======== WHAT I CAN DO SECTION ================  */}

        <div className={style.what_i_can_do}>
          <h3>
            {" "}
            <i>
              <MdComputer />
            </i>{" "}
            What Can I Do?
          </h3>
          <ul>
            <li>build websites</li>
            <li>build mobile apps</li>
            <li> Build REST API's</li>
            <li>build desktop applications</li>
            <li>Update & maintain Websites</li>
            <li>create & maintain databases</li>
          </ul>
        </div>
      </article>
    </main>
  )
}

export default Skill
