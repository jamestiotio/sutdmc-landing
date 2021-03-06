import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import PageBase from "../components/PageBase";
import PageHeader from "../components/PageHeader";
import Text from '../components/Text';

const GamePhoto = styled.img`
    width: 70%;
    margin: 10px auto;

    @media (max-width: 896px) {
        width: 100%;
    }
`;

const GamePageContent = styled.div`
    & img {
        display: block;
    }

    font-family: var(--font-primary);
    font-size: 24px;
    line-height: 1.4;
    color: var(--color-text);
    margin-bottom: 7vh;

    @media (max-width: 1200px) {
        font-size: 22px;
    }

    @media (max-width: 896px) {
        font-size: 20px;
    }

    @media (max-width: 576px) {
        font-size: 18px;
    }
`;

const GamePageList = styled.ul`

`;

const GamePageTable = styled.table`
    color: var(--color-text);
    margin: 0 auto;
`;

const GamePageTableRow = styled.tr`
    width: min-content;
`;

const GamePageTableCell = styled.td`
    outline: thin solid;
    padding: 5px;
`;

const gamePageSectionHeader = {
    textTransform: 'uppercase',
    fontSize: '30px',
    color: 'var(--color-accent)',
    marginTop: '20px'
}

const ArticleRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 20px;

    & > * {
        margin: 0 16px;
    }

    @media (max-width: 968px) {
        & > * {
            margin: 0;
        }

        display : flex;
        flex-direction: column;

        &:nth-child(even) {
            flex-direction: column-reverse;
        }
    }
`;

const ArticleImageDiv = styled.div`
    display: flex;
    align-self: center;
`;

const ArticleImage = styled.img`
    height: auto;
    width: 100%;
`;

const treasureHuntMarkup = (
    <GamePageContent>
        <Text>
            When you’re on the server, feel free to check every nook and cranny around the school. Walk down the hallways, find a few hidden easter eggs or messages left from SUTD students and alumni, or better yet, a treasure chest!
        </Text>
        <Text>
            Across the four days of open touring, there will be treasure chests hidden around the campus ground. Five adventurous visitors per day will win a $10 Starbucks/GV/Gong Cha if they can find one!
        </Text>
        <Text>
            When you chance yourself upon a chest, open it to find a book inside. Simply follow the instructions to redeem the prize for yourself. But remember, the true treasure is the friendships you made along the way!
        </Text>

        <Text style={gamePageSectionHeader}>Rules</Text>
        <GamePageList>
            <li>There will be 5 treasures hidden in different places of the school each day from 5 to 8 March 2021, for a total of 20 prizes.</li>
            <li>Prizes can only be redeemed by people <strong>currently residing</strong> in Singapore.</li>
            <li>Each player can only take one (1) prize book out of treasure chests (to redeem for themselves). <strong>Players who keep more than one prize book in their inventories will be disqualified.</strong></li>
        </GamePageList>

        <Text style={gamePageSectionHeader}>Treasure Status</Text>
        <Text>
            This table will be updated once treasures are found. Keep an eye on this page as we might post hints!
        </Text>
        <GamePageList>
            <li>Hint 1: There is something a-<strong>maze</strong>-ing in Building 2!</li>
            <li>Hint 2: The Jackie Chan Pavilions around the school might have their secrets!</li>
            <li>Hint 3: We have a lot of staircases around the campus, one of them might be hiding something...</li>
            <li>Hint 4: Did you know that Upper Changi MRT is the closest to SUTD?</li>
        </GamePageList>
            
        <GamePageTable>
            <GamePageTableRow>
                <GamePageTableCell>Friday</GamePageTableCell>
                <GamePageTableCell>2/5 remaining!</GamePageTableCell>
            </GamePageTableRow>
            <GamePageTableRow>
                <GamePageTableCell>Saturday</GamePageTableCell>
                <GamePageTableCell>4/5 remaining!</GamePageTableCell>
            </GamePageTableRow>
            <GamePageTableRow>
                <GamePageTableCell>Sunday</GamePageTableCell>
                <GamePageTableCell>5/5 remaining!</GamePageTableCell>
            </GamePageTableRow>
            <GamePageTableRow>
                <GamePageTableCell>Monday</GamePageTableCell>
                <GamePageTableCell>Not Yet Placed</GamePageTableCell>
            </GamePageTableRow>
        </GamePageTable>
    </GamePageContent>
)

const redstoneRushMarkup = (
    <GamePageContent>
        <Text>
            Logic gates make up every electronics we use, from the simplest toy to the computer you’re using to read this right now. Then man created Minecraft, and now mankind can create simulated logic gates using redstone on computers. Won’t be long before we go down another layer.
        </Text>

        <GamePhoto src={require('../assets/images/oh2021-games/redstone_2.png')}></GamePhoto>
        <Text>
            This game is inspired by 50.002 Computation Structures, a core module in the ISTD’s syllabus for juniors that teaches you how to build your own CPU starting from logic gates!
        </Text>

        <Text style={gamePageSectionHeader}>Gameplay</Text>
        <Text>You will run through a gauntlet of mini puzzles based on logic gates to solve. Don’t worry if you haven’t learned anything about logic gates before, all you need to know is already in game! Take your time to learn about each component and their functions.</Text>
        <Text>Once you’re ready, you can compete with others for the fastest run through the gauntlet. There will be prizes ($10 starbucks voucher each) given out to the top 5 fastest runners!</Text>

        <Text style={gamePageSectionHeader}>Competition Details</Text>
        <Text>Competition time: Sunday 7 March 2021, 9am to 6pm</Text>
        <Text>Runs completed before this time period will not be scored. After 6pm, the top 5 fastest runners will be chosen.</Text>
        <Text>
            If you want to be considered for a prize, you must register on this
            <a style={{textDecoration: 'underline', margin: '0 10px'}} href={'https://forms.office.com/Pages/ResponsePage.aspx?id=drd2NJDpck-5UGJImDFiPXTTmLO9afxItEje2XCt5nVUOEtKV0JHNDdHTzE2MUtYV0RPR1oxVU9QNyQlQCN0PWcu'}>web form</a>
            before participating. This competition is open to anyone currently residing in Singapore.
        </Text>

    </GamePageContent>
)

const speedBakersMarkup = (
    <GamePageContent>
        <ArticleRow>
            <ArticleImageDiv>
                <ArticleImage src={require('../assets/images/oh2021-games/speedbakers_1.png')}></ArticleImage>
            </ArticleImageDiv>
            <Text>
                How do factories and firms manage their supply chains and production capabilities to make their products efficiently and fulfill the demands of their customers daily? Have a hand at working in a simple cake producing factory to earn the most profit within a certain amount of time!
            </Text>
        </ArticleRow>

        <ArticleRow>
            <Text>
                You (and maybe your friends) are tasked to manage and work a cake producing factory that has seen better days. Objects are strewn about, blocking your path, and the floor is dirty and annoying to traverse through. Can you make the best out of the situation and become the most successful factory? Be the top 5 bakers and win a $10 Starbucks/GV/Gong Cha voucher!
            </Text>
            <ArticleImageDiv>
                <ArticleImage src={require('../assets/images/oh2021-games/speedbakers_4.png')}></ArticleImage>
            </ArticleImageDiv>
        </ArticleRow>


        <Text style={gamePageSectionHeader}>Gameplay</Text>

        <ArticleRow>
            <ArticleImageDiv>
                <ArticleImage src={require('../assets/images/oh2021-games/speedbakers_2.png')}></ArticleImage>
            </ArticleImageDiv>
            <Text>
                To make a cake, you will need 3 buckets of milk, an egg, two parts of sugar processed from sugarcane, and 3 stalks of wheat. While your factory produces some of the ingredients itself, others are brought in by suppliers at a certain rate. However, with various parts of the process going at different rates, your speed of cake production may get limited. Which part of the process is bottlenecking you? Is it worth investing money in to speed it up? Your task is to optimize your process from gathering the ingredients to crafting the cakes and then shipping them out for profit! Try to be the factory with the most money after 5 minutes!
            </Text>
        </ArticleRow>

        <Text style={gamePageSectionHeader}>Information about ingredients, buying and selling, and crafting</Text>
        <Text>
            Buying/Selling – Right-click on the relevant sign to purchase upgrades or items like buckets and swiftness potions while deducting your money. Right-clicking on the “Sell” sign sells cakes and adds to your money.
        </Text>
        <Text>
            Swiftness Potion – Hold right-click with a potion on hand to drink it and raise your movement speed for 3 minutes.
        </Text>
        <Text>
            Buckets of Milk – Right-click on the cow with an empty bucket to get a bucket of milk. Additional buckets can be bought.
        </Text>
        <Text>
            Eggs – Collect them from the truck as they are delivered. The rate of egg delivery can be increased with purchases.
        </Text>
        <Text>
            Bone Meal – Fertilizer to speed up or instantly grow crops. Collect them from the truck as they are delivered. The rate of bone meal delivery can be increased with purchases.
        </Text>
        <Text>
            Wheat – Left-click on fully grown (completely yellow) wheat to harvest a stalk of wheat and seeds. Right-click on an empty plot of farmland with a seed in hand to plant it. Right-click partially grown crops with bone meal to grow them.
        </Text>
        <Text>
            Sugar – Right-click on the sugarcane stalk to harvest sugarcane. Place pieces of sugarcane in the crafting table to receive sugar from the output.
        </Text>
        <Text>
            Cake – Place the ingredients in the below pattern in the crafting table to receive a cake from the output.
        </Text>
        <GamePhoto src={require('../assets/images/oh2021-games/speedbakers_5.png')}></GamePhoto>

        <Text style={gamePageSectionHeader}>Rules</Text>
        <GamePageList>
            <ul>
                <li>The game is open from Saturday, 6 March, 9am to Monday, 8 March 5pm. At the end of the event, the top 5 scorers will be contacted to receive a prize.</li>
                <li>If you would like to be considered for a prize, you must register your contact details<a style={{textDecoration: 'underline', margin: '0 10px'}} href={'https://forms.office.com/Pages/ResponsePage.aspx?id=drd2NJDpck-5UGJImDFiPXTTmLO9afxItEje2XCt5nVUOEtKV0JHNDdHTzE2MUtYV0RPR1oxVU9QNyQlQCN0PWcu'}>in this form</a><em>before</em> the end of the event.</li>
                <li>Only people <strong>currently residing</strong> in Singapore are eligible to claim the prize. If you are not residing in Singapore at the moment, you can still play the game.</li>
                <li>SUTD reserves the right to change the prize subject to availability.</li>
            </ul>
        </GamePageList>
    </GamePageContent>
)

const gameDetails = {
    'treasure_hunt': {
        title: 'Treasure Hunt',
        mainPhoto: require('../assets/images/oh2021-games/treasure_hunt.png'),
        content: treasureHuntMarkup
    },
    'redstone_rush': {
        title: 'Redstone Rush',
        mainPhoto: require('../assets/images/oh2021-games/redstone_rush.png'),
        content: redstoneRushMarkup,
        tagline: 'A challenge to test your logical thinking skills!'
    },
    'speed_bakers': {
        title: 'Speed Bakers',
        mainPhoto: require('../assets/images/oh2021-games/speed_bakers.png'),
        content: speedBakersMarkup,
        tagline: 'Let them have cake'
    }
}


const GamePageComp = () => {
    let { id } = useParams();
    const game = gameDetails[id];

    return (
        <PageBase>
            <PageHeader>{game.title}</PageHeader>
            {game.tagline && <Text style={{marginTop: '0'}}>{game.tagline}</Text>}
            <GamePhoto src={game.mainPhoto}></GamePhoto>
            {game.content}
        </PageBase>

    );
}

export default GamePageComp;
