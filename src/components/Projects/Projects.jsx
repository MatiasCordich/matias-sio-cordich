import { L_Layout } from "../Layouts/Layouts";
import Title from "../Title/Title";
import {
  DescriptionLeft,
  DescriptionRight,
  ImageBox,
  ImageProject,
  ItemStack,
  LinkProject,
  ProjectBoxLeft,
  ProjectBoxRight,
  ProjectHeader,
  ProjectLinks,
  ProjectStack,
  ProjectText,
  ProjectTitle,
} from "./projectsElements";
import { FiGithub, FiLink } from "react-icons/fi";
import { project1Img, project2Img, project3Img } from "../../assets";
import { motion } from "framer-motion";
import { projectDescription } from "./information";

const Projects = () => {
  return (
    <div id="page3">
      <L_Layout>
        <Title title="Proyectos" number="02" />
        <ProjectBoxLeft
          as={motion.div}
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <ImageBox>
            <ImageProject src={project1Img} alt="project-img" />
          </ImageBox>
          <DescriptionLeft>
            <ProjectHeader>{projectDescription[0].miniTitle}</ProjectHeader>
            <ProjectTitle>{projectDescription[0].title}</ProjectTitle>
            <ProjectText>{projectDescription[0].descrption}</ProjectText>
            <ProjectStack>
              {projectDescription[0].techstack.map((stack, index) => (
                <ItemStack key={index}>{stack}</ItemStack>
              ))}
            </ProjectStack>
            <ProjectLinks>
              <LinkProject
                href={projectDescription[0].links.github}
                target="_blank"
              >
                <FiGithub />
              </LinkProject>
              <LinkProject
                href={projectDescription[0].links.demo}
                target="_blank"
              >
                <FiLink />
              </LinkProject>
            </ProjectLinks>
          </DescriptionLeft>
        </ProjectBoxLeft>

        <ProjectBoxRight
          as={motion.div}
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <ImageBox>
            <ImageProject src={project2Img} alt="project-img" />
          </ImageBox>
          <DescriptionRight>
            <ProjectHeader>{projectDescription[1].miniTitle}</ProjectHeader>
            <ProjectTitle>{projectDescription[1].title}</ProjectTitle>
            <ProjectText>{projectDescription[1].descrption}</ProjectText>
            <ProjectStack>
              {projectDescription[1].techstack.map((stack, index) => (
                <ItemStack key={index}>{stack}</ItemStack>
              ))}
            </ProjectStack>
            <ProjectLinks>
              <LinkProject
                href={projectDescription[1].links.github}
                target="_blank"
              >
                <FiGithub />
              </LinkProject>
              <LinkProject
                href={projectDescription[1].links.demo}
                target="_blank"
              >
                <FiLink />
              </LinkProject>
            </ProjectLinks>
          </DescriptionRight>
        </ProjectBoxRight>

        <ProjectBoxLeft
          as={motion.div}
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2.7 }}
        >
          <ImageBox>
            <ImageProject src={project3Img} alt="project-img" />
          </ImageBox>
          <DescriptionLeft>
            <ProjectHeader>{projectDescription[2].miniTitle}</ProjectHeader>
            <ProjectTitle>{projectDescription[2].title}</ProjectTitle>
            <ProjectText>{projectDescription[2].descrption}</ProjectText>
            <ProjectStack>
              {projectDescription[2].techstack.map((stack, index) => (
                <ItemStack key={index}>{stack}</ItemStack>
              ))}
            </ProjectStack>
            <ProjectLinks>
              <LinkProject
                href={projectDescription[2].links.github}
                target="_blank"
              >
                <FiGithub />
              </LinkProject>
              <LinkProject
                href={projectDescription[2].links.demo}
                target="_blank"
              >
                <FiLink />
              </LinkProject>
            </ProjectLinks>
          </DescriptionLeft>
        </ProjectBoxLeft>
      </L_Layout>
    </div>
  );
};

export default Projects;
