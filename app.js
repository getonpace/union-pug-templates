const express = require('express');
const app = express();
const _ = require('lodash');

const members = [{
    name: 'Arif Gursel',
    description: 'Founder & GM',
    photo: 'img/headshot-arif@2x.png',
    background: 'img/hero-members@2x.png',
    links: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
    },
    bio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. \n Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. \n Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
    testimony: 'She is a GREAT MENTOR! Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
},
{
    name: 'Gusti Clark',
    description: 'Head of Operations',
    photo: 'img/headshot-gusti@2x.png',
    background: 'img/hero-members@2x.png',
    links: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
    }
},
{
    name: 'My Tam Nguyen',
    description: 'Business Development',
    photo: 'img/headshot-mytam@2x.png',
    background: 'img/hero-members@2x.png',
    links: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
    }
},
{
    name: 'Jolyn Gardner',
    description: 'Arts Curator',
    photo: 'img/headshot-jolyn@2x.png',
    background: 'img/hero-members@2x.png',
    links: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
    }
},
{
    name: 'My Tam Nguyen',
    description: 'Business Development',
    photo: 'img/headshot-mytam@2x.png',
    background: 'img/hero-members@2x.png',
    links: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
    }
},
{
    name: 'My Tam Nguyen',
    description: 'Business Development',
    photo: 'img/headshot-mytam@2x.png',
    background: 'img/hero-members@2x.png',
    links: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
    }
}]

const events = [];

for(let item of ['practice pitch session', 'halloware! a halloween party', 'independent guest day', 'startups prepare legally', 'practice pitch session', 'halloware! a halloween party', 'independent guest day', 'startups prepare legally', 'independent guest day']){
    events.push({
        date: new Date('10/16/2016'),
        startTime: new Date('2016-10-16T21:00:00'),
        endTime: new Date('2016-10-17T02:00:00'),
        title: item,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
        thumbnail: 'http://www.dolby-gallery.com/web/wp-content/uploads/2013/03/featured-image-600x350-crank-wojcik.jpg',
        list: ['Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis', 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis']
    })
}

const testimonials = [{
    thumbnail: '/img/testimonial-logo@2x.png',
    content: '"The Union offered an inspiring, collaborative and welcoming environment with business resources to guide people toward success. The co-working space and workshops are critical to powering entrepreneurs."',
    author: {
        name: 'David Harris',
        position: 'Startup Advocate, City of Seattle'
    }
},
{
    thumbnail: '/img/testimonial-logo@2x.png',
    content: '"The Union offered an inspiring, collaborative and welcoming environment with business resources to guide people toward success. The co-working space and workshops are critical to powering entrepreneurs."',
    author: {
        name: 'David Harris',
        position: 'Startup Advocate, City of Seattle'
    }
},
{
    thumbnail: '/img/testimonial-logo@2x.png',
    content: '"The Union offered an inspiring, collaborative and welcoming environment with business resources to guide people toward success. The co-working space and workshops are critical to powering entrepreneurs."',
    author: {
        name: 'David Harris',
        position: 'Startup Advocate, City of Seattle'
    }
},
{
    thumbnail: '/img/testimonial-logo@2x.png',
    content: '"The Union offered an inspiring, collaborative and welcoming environment with business resources to guide people toward success. The co-working space and workshops are critical to powering entrepreneurs."',
    author: {
        name: 'David Harris',
        position: 'Startup Advocate, City of Seattle'
    }
},
{
    thumbnail: '/img/testimonial-logo@2x.png',
    content: '"The Union offered an inspiring, collaborative and welcoming environment with business resources to guide people toward success. The co-working space and workshops are critical to powering entrepreneurs."',
    author: {
        name: 'David Harris',
        position: 'Startup Advocate, City of Seattle'
    }
}];

const articles = [{
    title: 'Benefits of Running Startup from a Co-working Space',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa quae optio debitis officiis',
    date: 'October 16, 2018',
    link: '#',
    thumbnail: 'http://www.digitalmeetsculture.net/wp-content/uploads/2015/04/article.jpg'
},
{
    title: 'Be Creative, Be Innovative, Be Resilient',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa quae optio debitis officiis',
    date: 'October 17, 2018',
    link: '#',
    thumbnail: 'http://www.digitalmeetsculture.net/wp-content/uploads/2015/04/article.jpg',
    author: {
        url: '#',
        thumbnail: 'https://www.cbpp.org/sites/default/files/styles/crop_228x228/public/thumbnails/image/will_fischer-500x500.jpg?itok=-N194QwZ',
        name: 'Stephanie Romero',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat quis. nostrud exerci tation ullamcorper suscipit lobortis nisl'
    }
},
{
    title: 'How to Find Startup Co-Founders',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa quae optio debitis officiis',
    date: 'October 18, 2018',
    link: '#',
    thumbnail: 'http://www.digitalmeetsculture.net/wp-content/uploads/2015/04/article.jpg'
},
{
    title: 'Benefits of Running Startup from a Co-working Space',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa quae optio debitis officiis',
    date: 'October 16, 2018',
    link: '#',
    thumbnail: 'http://www.digitalmeetsculture.net/wp-content/uploads/2015/04/article.jpg'
},
{
    title: 'Be Creative, Be Innovative, Be Resilient',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa quae optio debitis officiis',
    date: 'October 17, 2018',
    link: '#',
    thumbnail: 'http://www.digitalmeetsculture.net/wp-content/uploads/2015/04/article.jpg'
},
{
    title: 'How to Find Startup Co-Founders',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa quae optio debitis officiis',
    date: 'October 18, 2018',
    link: '#',
    thumbnail: 'http://www.digitalmeetsculture.net/wp-content/uploads/2015/04/article.jpg'
}];

app.set('views', './views')
app.set('view engine', 'pug');

app.use(express.static(__dirname))

app.use((req, res, next) => {
    res.locals.moment = require('moment');
    res.locals._ = require('lodash');
    res.locals.messages = {};
    res.locals.loggedIn = true;

    next();
})

app.get('/', (req, res, next) => {
    res.locals.title = 'Home';

    res.locals.events = events.slice(0,4);
    
    res.locals.members = Array.prototype.slice.apply(_.concat([], members), [0,3]);

    res.locals.articles = Array.prototype.slice.apply(_.concat([], articles), [0,3]);

    res.locals.testimonials = testimonials;

    res.render('home');
})

app.get('/events', (req, res, next) => {
    res.locals.title = 'Events';
    res.locals.events = events;
    res.locals.paginate = true;

    res.render('pages/events');
})

app.get('/team', (req, res, next) => {
    res.locals.currentMember = 0;
    res.locals.title = 'Team';
    
    res.locals.members = _.concat([], members);

    res.render('pages/team')
})

app.get('/gallery', (req,res,next) => {
    res.locals.paginate = true;
    res.locals.title = 'Gallery';

    res.locals.images = [
    {
        src: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
        alt: 'some text here'
    },
    {
        src: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
        alt: 'some text here'
    },
    {
        src: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
        alt: 'some text here'
    },
    {
        src: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
        alt: 'some text here'
    },
    {
        src: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
        alt: 'some text here'
    },
    {
        src: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
        alt: 'some text here'
    },
    {
        src: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
        alt: 'some text here'
    }]

    res.render('pages/gallery');
})

app.get('/about', (req,res,next) => {
    res.locals.title = 'About';

    res.locals.members = _.concat([], members);

    res.locals.testimonials = testimonials;

    res.render('pages/about');
})

app.get('/faq', (req,res,next) => {
    res.locals.title = "FAQ";

    res.locals.questions = [{
        question: 'Do I Need To Register Before Placing An Order?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi ab voluptatibus unde quis corporis deleniti quia natus ipsam rerum non aliquam eius possimus nihil maiores sed, blanditiis odio voluptatum.'
    },
    {
        question: 'How Do I Register?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi ab voluptatibus unde quis corporis deleniti quia natus ipsam rerum non aliquam eius possimus nihil maiores sed, blanditiis odio voluptatum.'
    },
    {
        question: 'Why Should I Become A Registered User?',
        answer: 'You will not be required to re-enter your shipping or billing addresses every time you order online. Whenever you place an order, it will be delivered to the registered address on file, unless you direct us otherwise.\n You can browse, shop and, if necessary, complete your order at a later time. We\'ll keep track of the items you\'ve already put in your shopping bag so that when you come back later, you will not have to re-select the items again. Note that placing items to your shopping bag for purchase at a later time does not guarantee item availability.\nLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
    },
    {
        question: 'How Do I Reset My Password?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi ab voluptatibus unde quis corporis deleniti quia natus ipsam rerum non aliquam eius possimus nihil maiores sed, blanditiis odio voluptatum.'
    },
    {
        question: 'How Do I Change My Account Information?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi ab voluptatibus unde quis corporis deleniti quia natus ipsam rerum non aliquam eius possimus nihil maiores sed, blanditiis odio voluptatum.'
    },
    {
        question: 'Can I Change My Email Address In My Account?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi ab voluptatibus unde quis corporis deleniti quia natus ipsam rerum non aliquam eius possimus nihil maiores sed, blanditiis odio voluptatum.'
    },
    {
        question: 'I Cannot Find The Answers To My Questions, How Do I Reach Customer Service?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi ab voluptatibus unde quis corporis deleniti quia natus ipsam rerum non aliquam eius possimus nihil maiores sed, blanditiis odio voluptatum.'
    }]

    res.render('pages/faq')
})

app.get('/blog', (req,res,next) => {
    res.locals.title = "Blog"

    res.locals.paginate = true;

    res.locals.blogs = articles;

    res.locals.blogTags = ['Startup', 'Tips', 'Founders', 'News', 'Work', 'Freelance'];
    res.locals.blogCategories = ['All Categories', 'Startup news', 'Founder talk', 'Mentor tips', 'Tech talk', 'Business', 'Events', 'Review'];
    res.locals.blogPopular = [{title: 'Be Creative, Be Innovative, Be Resilient', link: '#'}, {title: 'How to Find Startup Co-Founders', link: '#'}, {title: 'Benefits of running startup from working space', link: '#'}, {title: 'How to Find Startup Co-Founders', link: '#'}, {title: 'Be Creative, Be Innovative, Be Resilient', link: '#'}];

    res.render('pages/blog/index');
})

app.get('/blog/:id', (req,res,next) => {
    res.locals.title = 'Blog';

    res.locals.blog = articles[1];
    res.locals.blogTags = ['Startup', 'Tips', 'Founders', 'News', 'Work', 'Freelance'];
    res.locals.blogCategories = ['All Categories', 'Startup news', 'Founder talk', 'Mentor tips', 'Tech talk', 'Business', 'Events', 'Review'];
    res.locals.blogPopular = [{title: 'Be Creative, Be Innovative, Be Resilient', link: '#'}, {title: 'How to Find Startup Co-Founders', link: '#'}, {title: 'Benefits of running startup from working space', link: '#'}, {title: 'How to Find Startup Co-Founders', link: '#'}, {title: 'Be Creative, Be Innovative, Be Resilient', link: '#'}];

    res.render('pages/blog/single');
})

app.listen(3000, () => {
    console.log('Server is listening to port 3000');
})