<template lang="html">
    <div class="repo-content">
        <div class="repo-title">
            <text-holder
                width="150px"
                height="23px"
            >
                {{ repo.node.name }}
            </text-holder>
        </div>
        <div class="repo-desc">
            <text-holder
                width="260px"
                height="21px"
            >
                {{ repo.node.description }}
            </text-holder>
        </div>
        <div class="repo-date">
            <text-holder
                width="80px"
                height="12px"
            >
                {{ repo.node.updated_at | fromNow }}
            </text-holder>
        </div>
        <div class="repo-info">
            <div class="repo-language">
                <text-holder
                    width="100px"
                    height="15px"
                >
                <span v-for="language in repo.node.languages.edges" ::key="
                language.node.name">
                    {{language.node.name }}
                </span>
                </text-holder>
            </div>
            <div class="repo-stats">
              <i class="fa fa-eye"></i> {{repo.node.watchers.totalCount}}
              <i class="fa fa-star"></i> {{repo.node.stargazers.totalCount}}
              <i class="fa fa-code-fork"></i> {{repo.node.forks.totalCount}}
            </div>
        </div>
    </div>
</template>

<script>
import TextHolder from './TextHolder';
import moment from 'moment';

export default {
    props: ['repo'],
    components: {
        TextHolder
    },
    filters: {
        fromNow(date) {
            return `Updated at ${moment(date).fromNow()}`;
        }
    }
}
</script>

<style lang="scss">
.repo-content {
    padding: 15px;
    background-color: #fff;

    .repo-pretitle {
        font-family: GothamPro;
        font-size: 13px;
        letter-spacing: -0.1px;
        color: #5c6877;
    }

    .repo-title {
        font-family: GothamPro-Medium;
        font-size: 18px;
        color: #5c6877;
        letter-spacing: -0.2px;
        line-height: 1.3;
        margin-bottom: 7px;
    }

    .repo-desc {
        font-family: GothamPro;
        font-size: 14px;
        line-height: 1.5;
        color: #77818e;
        margin-top: 5px;
        word-wrap: break-word;
    }

    .repo-date {
        font-family: GothamPro;
        font-size: 13px;
        color: #aeb6c0;
        margin-top: 5px;
    }

    .repo-info {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
    }

    .repo-language {
        font-family: GothamPro-Bold;
        font-size: 14px;
        color: #8f9aa8;
        letter-spacing: 0.3px;
    }

    .repo-stats {
        font-family: GothamPro;
        font-size: 14px;
        color: #77818e;
        letter-spacing: 0.3px;
        .fa {
            margin: 0 0px 0 10px;
        }
    }
}

</style>
