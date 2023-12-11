exports.getHomePage = (req, res) => {
    res.render('index.ejs')
}

exports.getMainPage = (req, res) => {
    res.render('main.ejs')
}

exports.getAboutPage = (req, res) => {
    res.render('about.ejs')
}

exports.getBlogPage = (req, res) => {
    res.render('blog.ejs')
}

exports.getContactPage = (req, res) => {
    res.render('contact.ejs')
}

exports.getDonatePage = (req, res) => {
    res.render('donate.ejs')
}

exports.getFeedPage = (req, res) => {
    res.render('feed-page.ejs')
}

exports.getGalleryPage = (req, res) => {
    res.render('gallery.ejs')
}

exports.getHowItWorksPage = (req, res) => {
    res.render('how-it-works.ejs')
}
