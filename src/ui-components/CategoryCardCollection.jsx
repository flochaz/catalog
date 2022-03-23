/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Category } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CategoryCard from "./CategoryCard";
import { Collection } from "@aws-amplify/ui-react";
export default function CategoryCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Category,
        }).items;
  return (
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={4}
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "CategoryCardCollection")}
    >
      {(item, index) => (
        <CategoryCard
          category={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CategoryCard>
      )}
    </Collection>
  );
}
