/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { Category } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type CategoryCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    category?: Category;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function CategoryCard(props: CategoryCardProps): React.ReactElement;
