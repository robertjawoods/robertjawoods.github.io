import { GraphQLClient, gql } from 'graphql-request'
import { useEffect, useState } from 'react';

function ProjectCard(props) {
    let url = "https://api.github.com/graphql";

    const [key, setKey] = useState(process.env.NEXT_PUBLIC_GITHUB_API_KEY);

    let client = new GraphQLClient(url, {
        headers: {
            'authorization': key
        }
    });

    let query = gql`
        query ($repo: String!, $owner: String!){ 
            repository(name: $repo, owner: $owner) { 
                name,
                description,
                url,
            }
        }
    `;

    const [repoData, setRepoData] = useState();

    const getRepo = () => {
        client.request(query, { repo: props.repo, owner: props.owner })
            .then(data => {
                setRepoData(data.repository);
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(async () => {
        await getRepo();
    }, []);

    return (
        <> {repoData ? (
            <div className="bg-blue rounded-xl p24 md:p-0 w-60 py-70">
                <div className="text-center text-peach">
                    <a href={repoData.url}>
                        <h2 className="underline">{repoData.name}</h2>
                    </a>
                    <p>{repoData.description}</p>
                </div>
            </div>
        ) : ""}
        </>
    );
}

export default ProjectCard;