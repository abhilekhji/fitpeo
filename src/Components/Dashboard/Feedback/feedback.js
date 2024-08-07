import style from './feedback.module.css';
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Feedback = () => {
    function createData(name, star, comment, img) {
        return { name, star, comment, img };
    }
    const data = [
        createData('Jenny Wilson', 4, 'The food was excellent and so was the sercice. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.', 'https://www.shutterstock.com/image-photo/frontal-portrait-serious-looking-businessman-260nw-1706382364.jpg'),
        createData('Dianne Russell', 5, 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Prefect service','https://media.istockphoto.com/id/518480533/photo/passport-photo-of-young-attractive-sexy-beautiful-woman.jpg?s=612x612&w=0&k=20&c=iSGn8b6tIEnYLHiZ9J8Zd8TFG-n9wF-N8NXWKiVAJ-w='),
        createData('Devon Lane', 4, 'Normally wings are wings, but theirs are lean, meaty and tender.','https://i.pinimg.com/236x/18/af/35/18af351094a7337c8aec6f6b27c8aa14.jpg')
    ]
    function rating(x){
        const star = [];
        for(let i=0;i<x;i++)
        {
            star.push(<StarIcon className={style.activeStar}/>);
        }
        for(let i=x;i<5;i++)
        {
            star.push(<StarIcon className={style.inactiveStar}/>);
        }
        return <div>{star}</div>;
    }
    return (
        <div className={style.feedbackContainer}>
            <Typography variant="h4" gutterBottom>Customer's Feedback</Typography>
            <Stack direction="column" spacing={4}>
                {data.map(item=>
                    <div>
                        <div className={style.nameAndImage}>
                            <Avatar  src={item.img} style={{marginRight: '10px'}} />
                            <Typography variant="h6" gutterBottom>{item.name}</Typography>
                        </div>
                        {rating(item.star)}
                        <Typography variant="body2" gutterBottom>{item.comment}</Typography>
                    </div>
                )}
            </Stack>
        </div>
    );
}

export default Feedback;