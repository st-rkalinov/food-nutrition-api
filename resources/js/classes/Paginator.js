class Paginator {
    constructor(page_meta) {
        this.meta = page_meta;
        this.linksCount = 4;
    }

    linksRange(from, to) {
        let arr = [];

        for (let i = from; i <= to; i++) {
            arr.push(i);
        }

        return arr;
    }

    makeLinks() {
        let links = null;
        links = this.linksRange(1, this.linksCount);

        if ((this.getCurrent() - this.linksCount) >= 1) {
            links = this.linksRange(this.getCurrent(), (this.getCurrent() + this.linksCount - 1));
        }

        links = links.filter(link => link <= this.last());

        if ((links.length < this.linksCount) && (this.last() > this.linksCount)) {
            links = this.linksRange((this.last() - this.linksCount + 1), this.last());
        }

        return links;
    }

    getLinks() {
        return this.makeLinks();
    }

    getCurrent() {
        return this.meta.current_page;
    }

    isCurrent(page) {
        return this.getCurrent() === page;
    }

    total() {
        return this.meta.total;
    }

    perPage() {
        return this.meta.per_page;
    }

    last() {
        return this.meta.last_page;
    }

    setMeta(meta) {
        this.meta = meta;
    }

    isFirst() {
        return this.getCurrent() === 1;
    }

    isLast() {
        return this.getCurrent() === this.last();
    }
}

export default Paginator;
