import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyImgDirective } from '../../lazy-img.directive';
import { BackToTopBtnComponent } from '../../utility/back-to-top-btn/back-to-top-btn.component';

@Component({
  selector: 'app-ecs',
  standalone: true,
  imports: [ RouterModule, LazyImgDirective, BackToTopBtnComponent ],
  templateUrl: './ecs.component.html',
  styleUrl: './ecs.component.scss'
})
export class EcsComponent {
	readonly entityManager: string =
`class EntityManager
{
public:
	EntityManager();
	~EntityManager();

	void Reset();
	Entity CreateEntity();
	Entity CreateEntityAtID(const eid_t& aEntity);
	void DestroyEntity(const Entity& aEntity);
private:
	std::deque<eid_t> myFreeEntities;
`;
	readonly componentManager: string =
`class ComponentManager
{
public:
	friend class World;

	ComponentManager();
	~ComponentManager();

	void Reset();

	template<typename T>
	void RegisterComponent(size_t aMaxSize);

	template<typename T>
	T& AddComponent(const Entity& aEntity);

	template<typename T>
	void RemoveComponent(const Entity& aEntity);

	template<typename T>
	T& GetComponent(const Entity& aEntity) const;

	void OnEntityDestroyed(const Entity& aEntity);

	template<typename T>
	bool HasComponent(const Entity& aEntity) const;

	template<typename T>
	void UpdateComponentSignature(const Entity& aEntity, bool aValue);
	
	const ComponentSignature& GetEntitySignature(const Entity& aEntity) const;
private:
	std::vector<IComponentContainer*> myComponentContainers;
	EntitySignatureCollection myEntitySignatureCollection;

	template<typename T>
	ComponentContainer<T>* GetComponentContainer() const;
};
`;

	readonly systemManager: string = 
`
class SystemManager
{
public:
	SystemManager(World* aWorld);
	~SystemManager();

	void Reset();
	void Update(SceneUpdateContext& aContext);
	void Render();
	void Init();

	template<typename T, typename... Param>
	T* RegisterSystem(Param... args);

	template<typename T>
	void SetSignature(const ComponentSignature& aSignature),

	void OnEntityDestroyed(const Entity& aEntity);

	void OnEntitySignatureChanged(const Entity& aEntity, const ComponentSignature& aSignature);
private:
	World* myWorld;

	std::vector<ComponentSignature> mySystemSignatures; // used for filtering entities
	std::vector<ISystem*> mySystems;
`;

  	readonly codeContainer = [
// Component ID showcase
`// Component.h
template <typename Derived>
struct Component
{
  friend class ComponentManager;
private:
  static cid_t componentId;
};

template <typename Derived>
cid_t Component<Derived>::componentId = 0;
`,
`// ComponentManager.h
class ComponentManager
{
public:
	template<typename T>
	void RegisterComponent(size_t aMaxSize)
	{
		T::componentId = myComponentContainers.size();
		myComponentContainers.push_back(new ComponentContainer<T>(aMaxSize));
	}
private:
  template<typename T>
  ComponentContainer<T>* GetComponentContainer() const
  {
    cid_t cid = T::componentId;
    assert(cid < myNextComponentId && "Component not registered before use.");
    return (ComponentContainer<T>*)myComponentContainers[cid];
  }
}`,


// Component ID usage showcase
`class ComponentManager
{
public:
	template<typename T>
	T& GetComponent(const Entity& aEntity) const
	{
		assert(myEntitySignatureCollection.GetComponentSignature(aEntity).test(T::componentId) && "Entity does not exist in ComponentContainer");
		return GetComponentContainer<T>()->GetComponent(myEntitySignatureCollection.GetSignatureIndex(aEntity, T::componentId));
	}
private:
	template<typename T>
	ComponentContainer<T>* GetComponentContainer() const
	{
		cid_t cid = T::componentId;

		assert(cid < myNextComponentId && "Component not registered before use.");

		return static_cast<ComponentContainer<T>*>(myComponentContainers.at(cid));
	}
};
`
];
}
