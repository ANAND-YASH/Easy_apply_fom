import TopBar from "./components/TopBar";
import EasyApply from "./components/EasyApply";
import PersonalInfo from "./components/PersonalInfo";
import ExperienceForm from "./components/ExperienceForm";
import EducationForm from "./components/EducationForm";
import YourProfiles from "./components/YourProfile";
import ResumeUpload from "./components/ResumeUpload";
import MessageSection from "./components/MessageSection";
export default function Home() {
  return (
    <div>
      <TopBar />
      <EasyApply/>
      <PersonalInfo/>
      <ExperienceForm/>
      <EducationForm/>
      <YourProfiles/>
      <ResumeUpload/>
      <MessageSection/>
    </div>
  );
}
