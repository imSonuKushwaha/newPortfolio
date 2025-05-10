import React from "react";

const Skill = () => {
  const func = (name) => {
    return (
      <div className="border border-gray-400 px-2 rounded-lg ">{name}</div>
    );
  };
  return (
    <div className="flex flex-row flex-wrap gap-2 text-lg mt-3">
      {func("C++")}
      {func("JavaScript")}
      {func("Dart")}
      {func("Python")}
      {func("SQL")}
      {func("HTML")}
      {func("CSS")}
      <div className="w-full border-t-2 border-gray-500 my-2"></div>
      {func("Git")}
      {func("GitLab")}
      {func("ReactJS")}
      {func("NextJS")}
      {func("ExpressJS")}
      {func("Tailwind CSS")}
      {func("BootStrap")}
      {func("Ant Design")}
      {func("Redux")}
      {func("Zustand")}
      {func("Material UI")}
      {func("OpenAPI")}
      {func("Postman")}
      {func("Firebase")}
      {func("MySQL")}
      {func("MongoDB")}
      {func("Figma")}
      {func("Flutter")}
      {func("React Native")}
    </div>
  );
};

export default Skill;
