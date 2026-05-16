import * as pdfParse from "pdf-parse";
import mammoth from "mammoth";

export const extractSkillsFromResume = async (fileBuffer, fileType) => {
  try {
    let text = "";

    // 👉 If PDF
    if (fileType === "application/pdf") {
      const data = await pdfParse.default(fileBuffer);
      text = data.text.toLowerCase();
    }

    // 👉 If Word (.docx)
    else if (
      fileType ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const data = await mammoth.extractRawText({ buffer: fileBuffer });
      text = data.value.toLowerCase();
    }

    // ❌ Unsupported file
    else {
      throw new Error("Unsupported file format");
    }

    // Skill database
    const skillsDB = [
      "react", "node", "javascript", "python",
      "java", "c++", "mongodb", "html", "css"
    ];

    const foundSkills = skillsDB.filter(skill =>
      text.includes(skill)
    );

    return foundSkills;

  } catch (error) {
    console.log("Parse Error:", error.message);
    return [];
  }
};