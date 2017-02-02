import React from 'react';

import Section from './Section';
import TagsSkillsAssesmentMockup from './TagsSkillsAssesmentMockup.png'

import './Instructions.css'

function Instructions() {
  return (
    <div className="instructions">
      <Section title="React/Redux Tag Editor Widget">
        <p>
          This is a fun little widget that can be added to your project.
        </p>
        <p>
          It uses Redux to maintain state. 
        </p>
      </Section>
      <Section title="Mockup">
        <p>
          This is a diagramed mockup of the overall functionality of the The Tag Editor.
        </p>
        <div className="mockup">
            <img alt="Mockup" src={TagsSkillsAssesmentMockup}/>
        </div>

      </Section>

      <Section title="Tag List">
        <p>
          A list of some tags that have been added.<br />
          A tag is just an object with a label and color.<br /><br />
          It can be removed from the Tag List when clicking the X.
        </p>
      </Section>

      <Section title="New Tag Input">
        <p>
          It makes a new tag when typing into this input.<br />
          It shows a list of existing tags when focused.
        </p>
      </Section>

      <Section title="Existing Tags Dropdown">
        <p>
          A Dropdown showing already existing tags that have not been added to the "Tag List". <br /><br />
          It should add the tag with its existing color to the “Tag List” when clicked.
        </p>
        <p>
          The list of existing tags is located in the src/api/tags.json file.
        </p>
      </Section>

      <Section title="Selected Color">
        <p>
          It opens the “Color Picker Popup” when clicked.<br />
          For a new tag, you can choose a color from the menu.
        </p>
      </Section>

      <Section title="Color Picker Popup">
        <p>It updates the background-color and "value" of “Selected Color” when clicked</p>
        <ul className="section-list">
          <li
            className="section-list-item"
            style={{ backgroundColor: "#0FADE9"}}
          >
            #0FADE9
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#0D40D9"}}
          >
            #0D40D9
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#F6524F"}}
          >
            #F6524F
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#9F0000"}}
          >
            #9F0000
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#05D9B5"}}
          >
            #05D9B5
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#00C361"}}
          >
            #00C361
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#FFCF2E"}}
          >
            #FFCF2E
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#FF7A1D"}}
          >
            #FF7A1D
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#B372E6"}}
          >
            #B372E6
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#5621A2"}}
          >
            #5621A2
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#8C8D91"}}
          >
            #8C8D91
          </li>
          <li
            className="section-list-item"
            style={{ backgroundColor: "#3E4042"}}
          >
            #3E4042
          </li>
        </ul>
      </Section>

      <Section title="Add Tag Button">
        <p>
          It adds the new tag to the "Tag List" with the color selected from “Selected Color.”<br />
          The new tag also becomes an existing tag, so that if it is removed from the "Tag List" it would show up in the “Existing Tag Dropdown”.
        </p>
      </Section>
    </div>
  );
}

export default Instructions;
