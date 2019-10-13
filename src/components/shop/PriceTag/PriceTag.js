import React from "react";
import { Tag } from "./styles";

const PriceTag = props => <Tag color={props.color}>{props.children}</Tag>;

export default PriceTag;
