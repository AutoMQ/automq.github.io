// import Breadcrumb from '../../../components/breadcrumb';
import { getFileIds, getFileData, getSideBar } from '../../../lib/posts-md';
// post directory
const postsDir = 'content/docs';
// dynamic route IDs
export async function getStaticPaths() {
    const
        paths = (await getFileIds(postsDir))
            .map((id) => {
                return {
                    params: {
                        title: id
                    }
                }
            }
            );
    return {
        paths,
        fallback: false,
    };
}
// dynamic route content
export async function getStaticProps(content) {
    return {
        props: {
            side_bar_doc: await getSideBar(postsDir, '_layout'),
            side_bar_api: await getSideBar(postsDir, '/api/_layout'),
            side_bar_how: await getSideBar(postsDir, '/how-to/_layout'),
            side_bar_cli: await getSideBar(postsDir, '/cli/_layout'),
            postData: await getFileData(postsDir, content.params.title.join('/')),
        },
    };
}

const content = ({ postData }) => {
    return (
        <>
            <div className="w-full markdown-body nuxt-content pt-6">
                <h1>{postData?.title}</h1>
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData?.html }} className=' max-w-full w-full pb-6 pt-4 markdown-body nuxt-content' />
        </>
    );
}
export default content

