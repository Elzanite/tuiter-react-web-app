import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
    <div class="row">
<div class="col-10">
    <div class="position-relative">
        <span class="ps-3 pt-2 position-absolute"><i class="fas fa-search"></i></span>
        <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter" type="text"/>
    </div>
</div>
<div class="col-2">
    <span><a class="pt-1 position-absolute" href="explore-settings.html"><i class="fas fa-cog fa-2x"></i></a></span>
</div>
</div>
<ul class="nav nav-tabs mt-1">
<li class="nav-item">
    <a class="nav-link active" href="for-you.html">For you</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="trending.html">Trending</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="news.html">News</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="sports.html,">Sports</a>
</li>
<li class="nav-item">
    <a class="nav-link d-none d-sm-none d-md-block" href="entertainment.html">Entertainment</a>
</li>
</ul>
<div class="row mt-1 mb-1">
<div class="position-relative">
    <img src="../../images/starship.jpg" width="100%">
    <div class="d-flex align-items-end">
        <h2 class="position-absolute pb-0 ps-2 text-white">SpaceX's Starship</h2>
    </div>
</div>
</div>
${PostSummaryList()}
`);
}
export default ExploreComponent;