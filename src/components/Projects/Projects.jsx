import { L_Layout } from '../Layouts/Layouts'
import Title from '../Title/Title'
import { DescriptionLeft, DescriptionRight, ImageBox, ImageProject, ItemStack, ProjectBoxLeft, ProjectBoxRight, ProjectHeader, ProjectStack, ProjectText, ProjectTitle } from './projectsElements'
import { projectImg } from '../../assets'
const Projects = () => {
    return (
        <L_Layout>
            <Title title="Proyectos" number="02" />
            <ProjectBoxLeft>
                <ImageBox>
                    <ImageProject src={projectImg} alt='project-img' />
                </ImageBox>
                <DescriptionLeft>
                    <ProjectHeader>Proyecto</ProjectHeader>
                    <ProjectTitle>Titulo</ProjectTitle>
                    <ProjectText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, vitae voluptatem eos perferendis similique repudiandae nam distinctio sint qui incidunt. Ab, provident inventore similique voluptatum doloremque delectus reiciendis! Placeat, cumque.</ProjectText>
                    <ProjectStack>
                        <ItemStack>React</ItemStack>
                        <ItemStack>React</ItemStack>
                        <ItemStack>React</ItemStack>
                    </ProjectStack>
                </DescriptionLeft>
            </ProjectBoxLeft>

            <ProjectBoxRight>
                <ImageBox>
                    <ImageProject src={projectImg} alt='project-img' />
                </ImageBox>
                <DescriptionRight>
                    <ProjectHeader>Proyecto</ProjectHeader>
                    <ProjectTitle>Titulo</ProjectTitle>
                    <ProjectText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, vitae voluptatem eos perferendis similique repudiandae nam distinctio sint qui incidunt. Ab, provident inventore similique voluptatum doloremque delectus reiciendis! Placeat, cumque.</ProjectText>
                    <ProjectStack>
                        <ItemStack>React</ItemStack>
                        <ItemStack>React</ItemStack>
                        <ItemStack>React</ItemStack>
                    </ProjectStack>
                </DescriptionRight>
            </ProjectBoxRight>

            <ProjectBoxLeft>
                <ImageBox>
                    <ImageProject src={projectImg} alt='project-img' />
                </ImageBox>
                <DescriptionLeft>
                    <ProjectHeader>Proyecto</ProjectHeader>
                    <ProjectTitle>Titulo</ProjectTitle>
                    <ProjectText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, vitae voluptatem eos perferendis similique repudiandae nam distinctio sint qui incidunt. Ab, provident inventore similique voluptatum doloremque delectus reiciendis! Placeat, cumque.</ProjectText>
                    <ProjectStack>
                        <ItemStack>React</ItemStack>
                        <ItemStack>React</ItemStack>
                        <ItemStack>React</ItemStack>
                    </ProjectStack>
                </DescriptionLeft>
            </ProjectBoxLeft>

          
        </L_Layout>
    )
}

export default Projects