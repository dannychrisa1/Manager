import Article from '../../containers/article/article';
const Blog = () => {

     return(

        <div className="article-content p-6">
            <div className="container mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between">
                <div className="flex flex-col space-y-6 md:w-1/2">
                    <h1 className="text-4xl font-bold text-center md:text-left md:max-w-md">What's Different About Manage</h1>
                    <p className="text-center md:text-left md:max-w-md">Manage provides all the functionality your team needs without the complexity. Our software is self made for modern digital products teams.</p>
                </div>
                <div className="artice md:w-1/2">
                <Article
                  serialNumber="01"
                  title="Track company-wide progress"
                  body="See how your day-to-day tasks fit into the wider vision Go from tracking the progress at the milestone level all the way done to the smallest of details. Never loose sight of the bigger picture again"
                />
                <Article
                  serialNumber="02"
                  title="Track company-wide progress"
                  body="See how your day-to-day tasks fit into the wider vision Go from tracking the progress at the milestone level all the way done to the smallest of details. Never loose sight of the bigger picture again"
                />
                <Article
                  serialNumber="03"
                  title="Track company-wide progress"
                  body="See how your day-to-day tasks fit into the wider vision Go from tracking the progress at the milestone level all the way done to the smallest of details. Never loose sight of the bigger picture again"
                />
            </div>
            </div>
            
        </div>
     )
}

export default Blog;