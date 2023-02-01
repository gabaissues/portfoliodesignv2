import React, { Fragment } from "react";
import IProject from "../../../interfaces/projects";
import * as G from "./styles";

interface Props {
  projects: IProject[];
}

const HeaderComponent = ({ projects }: Props) => {
  return (
    <G.Header id="header">
      <G.TextFixed right="2.5rem" top="2.5rem">
        UI/UX Design
      </G.TextFixed>

      <G.Image src="eu.svg" alt="um desenho cartoon do desenvolvedor" />
      <G.Text fontSize="1.5rem" fontWeight="600" margin="2rem 0rem 0rem 0rem">
        Antônio Gabriel / Vulgo, Gaba
      </G.Text>

      <G.Cards>
        {projects.map((project) => (
          <Fragment key={project._id}>
            <G.Card>
              <G.Paragraph>
                {project.description}
              </G.Paragraph>
              <G.CardBottom>
                  <G.Text fontSize="1.5rem" fontWeight="600">
                    {project.name}
                  </G.Text>

                  <G.Link href={`/projects/${project._id}`}>Acessar</G.Link>
              </G.CardBottom>
            </G.Card>
          </Fragment>
        ))}
      </G.Cards>
    </G.Header>
  );
};

export default HeaderComponent;
