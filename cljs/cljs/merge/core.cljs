(ns cljs.merge.core)

(defn ^:export merge [json unless]
  (defn clean-map [m]
    (if (map? m)
      (let [clean-val (fn [[k v]]
                        (let [v' (clean-map v)]
                          (when-not (nil? v')
                            [k v'])))
            m' (->> (map clean-val m)
                    (remove nil?)
                    (into {}))]
        (when-not (empty? m') m')) m))

  (defn clean-deep-merge! [& xs]
    (clean-map
     (let [xs (remove nil? xs)]
       (if (every? map? xs)
         (apply merge-with clean-deep-merge! xs)
         (last xs)))))

  (let [source (js->clj json :keywordize-keys true)]
    (let [src-map (get source :src)]
      (let [target-map (get source :target)]
        (clj->js (clean-deep-merge! src-map target-map))))))