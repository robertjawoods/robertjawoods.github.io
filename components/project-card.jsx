import { GraphQLClient, gql } from 'graphql-request'
import { useEffect, useState } from 'react';

function ProjectCard(props) {
    let url = "https://api.github.com/graphql";

    const [key, setKey] = useState(process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN);

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
            <div class="rounded overflow-hidden shadow-2xl">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{repoData.name}</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
                </div>
            </div>
        ) : ""}
        </>
    );
}

export default ProjectCard;