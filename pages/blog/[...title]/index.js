// import Breadcrumb from '../../../components/breadcrumb';
import moment from 'moment';
import { getFileIds, getFileData } from '../../../lib/posts-md';
import Toc from '../../../components/toc'
import { postTagStyle } from '../../../lib/util';
import { getTeammateByName } from '../../../common/teammateList';
// post directory
const postsDir = 'content/blog';
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
            postData: await getFileData(postsDir, content.params.title.join('/')),
        },
    };
}

const content = ({ postData }) => {
    return (
        <div id="content" className="space-y-8">
            <div className="hidden sm:flex sm:h-96 w-full">
                {
                    postData.feature_image && (
                        <img className="w-full h-auto object-scale-down" src={postData?.feature_image} />
                    )
                }
            </div>
            <div className="prose sm:prose-xl md:prose-2xl mx-auto px-4">
                {
                    postData?.tags?.map((item, index) => {
                        return (
                            <div className='mb-4 inline-flex' key={index}>
                                {
                                    postTagStyle(item) && (
                                        <span className={`items-center px-3 py-0.5 mr-2 rounded-full text-base font-medium ${postTagStyle(item)}`}>
                                            {item}
                                        </span>
                                    )
                                }
                            </div>
                        )
                    })
                }
                <h1>{postData?.title}</h1>
            </div>
            <div
                className="flex flex-row items-center justify-center text-base text-gray-900 font-semibold tracking-wide uppercase"
            >
                {
                    getTeammateByName(postData?.author) && (
                        <img
                            className="h-10 w-10 rounded-full mr-2"
                            src={`/people/${getTeammateByName(postData?.author).name.toLowerCase()}.webp`}
                            alt=""
                        />
                    )
                }
                {postData.author}
                <div className="ml-2 flex space-x-1 text-gray-500">
                    <time dateTime={moment(postData.published_at).format("MMM DD YYYY")}>
                        {moment(postData.published_at).format("MMM DD YYYY")}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{postData.wordcount}</span>
                </div>
            </div>
            <div className="flex flex-row">
                <aside className="w-52 hidden xl:flex" />
                <div dangerouslySetInnerHTML={{ __html: postData?.html }} className='w-full px-4 py-6 prose prose-indigo prose-xl 2xl:prose-2xl mx-auto' />
                <Toc content={postData?.html} scroll-offset={200} />
            </div>
        </div>
    );
}
export default content

