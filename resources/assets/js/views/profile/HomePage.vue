<template>
    <div class="profile-page sidebar-collapse">
        <div class="wrapper">
            <div class="page-header page-header-small" filter-color="orange">
                <div class="page-header-image" data-parallax="true">

                </div>
                <div class="container">
                    <div class="content-center">
                        <div class="photo-container">
                            <img src="" alt="">
                        </div>
                        <h3 class="title">Ryan Scheinder</h3>
                        <p class="category">Photographer</p>
                        <div class="content">
                            <div class="social-description">
                                <h2>26</h2>
                                <p>Comments</p>
                            </div>
                            <div class="social-description">
                                <h2>26</h2>
                                <p>Comments</p>
                            </div>
                            <div class="social-description">
                                <h2>48</h2>
                                <p>Bookmarks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="container">
                    <div class="button-container">
                        <a href="" class="btn btn-primary btn-round btn-lg">Follow</a>
                        <a href="#" class="btn btn-default btn-round btn-lg btn-icon" rel="tooltip"
                           title="Follow me on Twitter">
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a href="#" class="btn btn-default btn-round btn-lg btn-icon" rel="tooltip"
                           title="Follow me on Instagram">
                            <i class="fa fa-instagram"></i>
                        </a>
                    </div>
                    <h3 class="title">About me</h3>
                    <h5 class="description">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</h5>
                    <div class="row">
                        <div class="col-md-6 ml-auto mr-auto">
                            <h4 class="title text-center">My Portfolio</h4>
                            <div class="nav-align-center">
                                <ul class="nav nav-pills nav-pills-primary" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#profile" role="tablist">
                                            <i class="now-ui-icons design_image"></i>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#home" role="tablist">
                                            <i class="now-ui-icons location_world"></i>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#messages" role="tablist">
                                            <i class="now-ui-icons sport_user-run"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Tab panes -->
                        <div class="tab-content gallery">
                            <div class="tab-pane active" id="home" role="tabpanel">
                                <div class="col-md-10 ml-auto mr-auto">
                                    <div class="row collections">
                                        <div class="col-md-6">
                                            <img src="" alt="" class="img-raised">
                                            <img src="" alt="" class="img-raised">
                                        </div>
                                        <div class="col-md-6">
                                            <img src="" alt="" class="img-raised">
                                            <img src="" alt="" class="img-raised">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="profile" role="tabpanel">
                                <div class="col-md-10 ml-auto mr-auto">
                                    <div class="row collections">
                                        <div class="col-md-6">
                                            <img src="" class="img-raised">
                                            <img src="" alt="" class="img-raised">
                                        </div>
                                        <div class="col-md-6">
                                            <img src="" alt="" class="img-raised">
                                            <img src="" alt="" class="img-raised">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="messages" role="tabpanel">
                                <div class="col-md-10 ml-auto mr-auto">
                                    <div class="row collections">
                                        <div class="col-md-6">
                                            <img src="" alt="" class="img-raised">
                                            <img src="" alt="" class="img-raised">
                                        </div>
                                        <div class="col-md-6">
                                            <img src="" alt="" class="img-raised">
                                            <img src="" class="img-raised">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer footer-default">
                <div class="container">
                    <nav>
                        <ul>
                            <li>
                                <a href="https://www.creative-tim.com">
                                    Creative Tim
                                </a>
                            </li>
                            <li>
                                <a href="http://presentation.creative-tim.com">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="http://blog.creative-tim.com">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md">
                                    MIT License
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div class="copyright">
                        &copy;
                        {{ date }}, Designed by
                        <a href="http://www.invisionapp.com" target="_blank">Invision</a>. Coded by
                        <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
                    </div>
                </div>
            </footer>
        </div>
    </div>

</template>
<script>
    import {post} from "../../helpers/api";
    export default {
        data() {
            return {
                date: new Date().getFullYear(),
                qry: "",
                results: []
            };
        },
        methods: {
            autoCompleteNow() {
                this.results = [];
                post("api/search", {qry: this.qry}).then((res) => {
                    console.log(res.data);
                    this.results = res.data.result;
                });
            }
        }
    };
</script>
