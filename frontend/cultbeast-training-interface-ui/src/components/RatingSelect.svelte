<script>
  import {createEventDispatcher} from 'svelte'

  const dispatch = createEventDispatcher()

  const click = (value) => {
    alert("the voting feature will launch on october 2nd")
    dispatch('rating-select', value)
  }
</script>

<ul class="rating">
  <li>
    <input type="radio" id="num1" name="rating" on:change={() => click(1)}/>
    <label for="num1">1</label>
  </li>
  <li>
    <input type="radio" id="num2" name="rating" on:change={() => click(2)}/>
    <label for="num2">2</label>
  </li>
  <li>
    <input type="radio" id="num3" name="rating" on:change={() => click(3)} />
    <label for="num3">3</label>
  </li>
  <li>
    <input type="radio" id="num4" name="rating" on:change={() => click(4)} />
    <label for="num4">4</label>
  </li>
  <li>
    <input type="radio" id="num5" name="rating" on:change={() => click(5)} />
    <label for="num5">5</label>
  </li>
  <li>
    <input type="radio" id="num6" name="rating" on:change={() => click(6)} />
    <label for="num6">6</label>
  </li>
  <li>
    <input type="radio" id="num7" name="rating" on:change={() => click(7)} />
    <label for="num7">7</label>
  </li>
  <li>
    <input type="radio" id="num8" name="rating" on:change={() => click(8)} />
    <label for="num8">8</label>
  </li>
  <li>
    <input type="radio" id="num9" name="rating" on:change={() => click(9)} />
    <label for="num9">9</label>
  </li>
  <li>
    <input type="radio" id="num10" name="rating" on:change={() => click(10)} />
    <label for="num10">10</label>
  </li>
</ul>

<style>
  .rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0;
  }

  .rating li {
    position: relative;
    background: #f4f4f4;
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    font-size: 19px;
    border: 1px #eee solid;
    transition: 0.3s;
  }

  .rating li label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .rating li:hover {
    background: #ff6a95;
    color: #fff;
  }

  [type='radio'] {
    opacity: 0;
  }

  [type='radio']:checked ~ label {
    background: #ff6a95;
    color: #fff;
  }
</style>