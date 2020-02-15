import { shallowMount } from "@vue/test-utils";
import Example from "../../components/Example";

describe("Example.vue", () => {
    it("renders props.msg when passed", () => {
        const msg = "new message";
        const wrapper = shallowMount(Example, {
            propsData: { msg }
        });
        expect(wrapper.text()).toMatch(msg);
    });
});
