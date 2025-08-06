import PageLayout from "../components/layout/PageLayout.tsx";
import TemplatesPanel from "../components/templates-panel/TemplatesPanel.tsx";
import type {FC} from "react";

const MainPage: FC = () => {
    return (
        <PageLayout>
            <TemplatesPanel/>
        </PageLayout>
    )
}

export default MainPage;