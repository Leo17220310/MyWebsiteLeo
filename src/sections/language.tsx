import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState("en"); // Default language is English

  const handleLanguageChange = (language: React.SetStateAction<string>) => {
    setSelectedLanguage(language);
    // Here you can implement logic to change the language of the website using i18n libraries or any other method you prefer
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 m-4">
        <Select>
          <SelectTrigger className="w-[180px] text-black">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent> 
            <SelectGroup>
              <SelectLabel>Language</SelectLabel>
              <SelectItem value="en" onClick={() => handleLanguageChange("en")}>
                English
              </SelectItem>
              <SelectItem value="de" onClick={() => handleLanguageChange("de")}>
                Deutsch
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default Language;
