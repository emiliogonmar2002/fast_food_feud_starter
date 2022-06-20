import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  if(props.selectedMenuItem){
    return (
      <div className="nutritional-label">

        {console.log(props.selectedMenuItem)}
        <h3 className="title">Nutrition Facts</h3>

        <h4 className="item-name">{props.selectedMenuItem!=null ? props.selectedMenuItem.item_name : ""}</h4>

        <ul className="fact-list">{nutritionFacts.map( (fact) => (
          <NutritionalLabelFact 
            key={fact.id}
            label={fact.label}
            attribute={fact.attribute}
            menuItem={props.selectedMenuItem}
            />
        ))}</ul>
      </div>
    )
  }
  return null;
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.menuItem[props.attribute]}</span>
    </li>
  )
}

export default NutritionalLabel
