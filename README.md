# union-pug-templates
This is a repo created for the collaborative development of front end assets (HTML[pug]/CSS/JS)

## Example of res.locals:
```js
app.get('', (req,res,next) => {
    res.locals = {
        messages: {},
        events: [
            {
                month: 'OCT',
                date: '12th, 2016',
                title: 'membership open house',
                description: 'Come learn more about becoming a member at our monthly member networking event'
            },
            {
                month: 'OCT',
                date: '28th, 2018',
                title: 'halloween soiree',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi ipsum'
            },
            {
                month: 'NOV',
                date: '03rd, 2018',
                title: 'intro to ux design',
                description: 'Come learn from top UX designers what it takes to break into and sustain a career in design'
            },
            {
                month: 'DEC',
                date: '26th, 2018',
                title: 'wakwanzaa week',
                description: 'This event combines Black Panther and Kwanzaa to foster dialogue about community empowerment'
            }
        ],
        members: [
            {
                name: 'Arif Gursel',
                description: 'Founder & GM',
                photo: 'img/headshot-arif@2x.png',
                links: {
                    linkedin: 'https://linkedin.com',
                    twitter: 'https://twitter.com',
                    facebook: 'https://facebook.com',
                }
            },
            {
                name: 'Gusti Clark',
                description: 'Head of Operations',
                photo: 'img/headshot-gusti@2x.png',
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
                links: {
                    linkedin: 'https://linkedin.com',
                    twitter: 'https://twitter.com',
                    facebook: 'https://facebook.com',
                }
            }
        ],
        articles: [
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
            }
        ],
        testimonials: [
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
            }
        ]
    }
})
```